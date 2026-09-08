import type { JSX } from "react/jsx-runtime";

import { Button } from "@alsos/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@alsos/ui/components/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@alsos/ui/components/field";
import { Input } from "@alsos/ui/components/input";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";

import { authClient } from "#/lib/auth-client";

export const Route = createFileRoute("/signup")({ component: SignupPage });

const signupSchema = z.object({
  email: z.email("Skriv inn en gyldig e-postadresse"),
  password: z.string().min(8, "Passordet må ha minst 8 tegn"),
});

function SignupPage(): JSX.Element {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: { email: "", password: "" },

    validators: { onSubmit: signupSchema },

    onSubmit: ({ value }) =>
      authClient.signUp.email(
        { email: value.email, password: value.password, name: value.email },
        {
          onSuccess: () => void navigate({ to: "/cms" }),
          onError: (ctx: { error: { message?: string } }) => {
            throw new Error(ctx.error.message ?? "Kunne ikke opprette bruker.");
          },
        },
      ),
  });

  return (
    <main className='flex w-full max-w-md flex-1 items-center px-6 py-16'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Opprett konto</CardTitle>
          <CardDescription>
            Opprett en konto med e-post og passord.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id='signup-form'
            onSubmit={(event) => {
              event.preventDefault();
              void form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field name='email'>
                {(field) => (
                  <SignupField
                    field={field}
                    label='E-post'
                    type='email'
                    autoComplete='email'
                  />
                )}
              </form.Field>
              <form.Field name='password'>
                {(field) => (
                  <SignupField
                    field={field}
                    label='Passord'
                    type='password'
                    autoComplete='new-password'
                  />
                )}
              </form.Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-4'>
          <form.Subscribe
            selector={(state) => [state.errorMap.onSubmit, state.isSubmitting]}
          >
            {([error, submitting]) => (
              <>
                {error && (
                  <p className='text-destructive w-full text-sm' role='alert'>
                    {formatError(error)}
                  </p>
                )}
                <Button
                  className='w-full'
                  disabled={submitting === true}
                  form='signup-form'
                  type='submit'
                >
                  {submitting === true ? "Venter …" : "Opprett konto"}
                </Button>
              </>
            )}
          </form.Subscribe>
          <p className='text-muted-foreground text-center text-sm'>
            Har du allerede bruker?{" "}
            <Link className='text-primary underline' to='/login'>
              Logg inn
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}

type SignupFieldApi = {
  name: string;
  state: {
    value: string;
    meta: { isTouched: boolean; isValid: unknown; errors: unknown[] };
  };
  handleBlur: () => void;
  handleChange: (value: string) => void;
};

function SignupField({
  field,
  label,
  type,
  autoComplete,
}: {
  field: SignupFieldApi;
  label: string;
  type: string;
  autoComplete: string;
}): JSX.Element {
  const isInvalid =
    field.state.meta.isTouched && field.state.meta.isValid !== true;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        name={field.name}
        type={type}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
        aria-invalid={isInvalid}
        autoComplete={autoComplete}
      />
      {isInvalid && (
        <FieldError
          errors={field.state.meta.errors.map((error) => ({
            message: String(error),
          }))}
        />
      )}
    </Field>
  );
}

function formatError(error: unknown): string {
  return error instanceof Error
    ? error.message
    : typeof error === "string"
      ? error
      : "Kunne ikke opprette bruker.";
}
