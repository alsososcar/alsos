import { customAlphabet } from "nanoid";
import { monotonicFactory } from "ulid";

export const generateId = ({
  length = 20,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
}: {
  length?: number;
  alphabet?: string;
} = {}) => {
  const nanoid = customAlphabet(alphabet, length);
  return nanoid();
};

export const generateUuid = () => {
  const uuid = crypto.randomUUID();
  return uuid;
};

export const generatePrimaryId = monotonicFactory();

export const generatePublicId = () => generateId({ length: 20 });

const permitPublicIdAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generatePermitPublicId = () =>
  generateId({ length: 10, alphabet: permitPublicIdAlphabet });
