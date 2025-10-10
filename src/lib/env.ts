type RequiredEnvVar =
  | "SMTP_HOST"
  | "SMTP_PORT"
  | "SMTP_USER"
  | "SMTP_PASS"
  | "CONTACT_RECIPIENT";

export function getEnv(name: RequiredEnvVar) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}`);
  }

  return value;
}

export function getOptionalEnv(name: string) {
  return process.env[name];
}

export function resolveMailConfig() {
  const host = getEnv("SMTP_HOST");
  const port = Number(getEnv("SMTP_PORT"));
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS");
  const secure = getOptionalEnv("SMTP_SECURE") === "true" || port === 465;

  return {
    host,
    port,
    auth: { user, pass },
    secure,
  } as const;
}

export function getContactRecipient() {
  return getEnv("CONTACT_RECIPIENT");
}
