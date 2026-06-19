import { exports } from "cloudflare:workers"
import { afterEach, describe, expect, it, vi } from "vitest"

const imageBytes = new Uint8Array([0xff, 0xd8, 0xff, 0xd9])

function createImageResponse(contentType = "image/jpeg") {
  return new Response(imageBytes, {
    status: 200,
    headers: { "Content-Type": contentType },
  })
}

describe("GET /image/:id", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("returns an image stream with cache headers when upstream succeeds", async () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(async () =>
      createImageResponse()
    )

    const response = await exports.default.fetch(
      "https://example.com/image/237"
    )

    expect(response.status).toBe(200)
    expect(response.headers.get("Content-Type")).toBe("image/jpeg")
    expect(response.headers.get("Cache-Control")).toBe("public, max-age=300")

    const body = new Uint8Array(await response.arrayBuffer())
    expect(body).toEqual(imageBytes)
  })

  it("requests the expected picsum url for the image id", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockImplementation(async () => createImageResponse())

    await exports.default.fetch("https://example.com/image/42")

    expect(fetchMock).toHaveBeenCalledWith(
      "https://picsum.photos/id/42/1200/800"
    )
  })

  it("returns 404 when upstream responds with an error", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(null, { status: 404 })
    )

    const response = await exports.default.fetch(
      "https://example.com/image/missing"
    )

    expect(response.status).toBe(404)
  })

  it("returns 404 when upstream has no body", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(null, { status: 200 })
    )

    const response = await exports.default.fetch(
      "https://example.com/image/empty"
    )

    expect(response.status).toBe(404)
  })
})
