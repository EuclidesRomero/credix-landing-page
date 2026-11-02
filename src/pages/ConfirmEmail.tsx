import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type ConfirmEmailResponse =
  | { ok: true; already: false }
  | { ok: true; already: true }
  | { ok: false; reason: string };

export function ConfirmEmailPage() {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<"loading" | "success" | "error" | "already">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setErrorMessage("Token no proporcionado");
      return;
    }

    const confirmEmail = async () => {
      try {
        const response = await fetch(
          `https://api.credixapp.dev/confirm-email/${token}`,
          {
            method: "POST",
          }
        );

        const data: ConfirmEmailResponse = await response.json();

        if (data.ok) {
          if (data.already) {
            setStatus("already");
          } else {
            setStatus("success");
          }
        } else {
          setStatus("error");
          setErrorMessage(data.reason || "Error al confirmar el email");
        }
      } catch (error) {
        setStatus("error");
        setErrorMessage("Error de conexión con el servidor");
      }
    };

    confirmEmail();
  }, [token]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-5">
      <div className="w-full max-w-md">
        {status === "loading" && (
          <div className="rounded-2xl border border-line bg-card p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
            <h1 className="text-2xl font-bold text-ink">Confirmando tu email...</h1>
            <p className="mt-3 text-base text-muted">
              Por favor espera mientras verificamos tu cuenta.
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="rounded-2xl border border-line bg-card p-8 text-center animate-rise">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <svg
                className="h-8 w-8 text-success"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-ink">
              ¡Email confirmado exitosamente!
            </h1>
            <p className="mt-3 text-base text-muted">
              Tu cuenta ha sido verificada. Ya puedes empezar a usar Credix.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Ir al inicio
            </a>
          </div>
        )}

        {status === "already" && (
          <div className="rounded-2xl border border-line bg-card p-8 text-center animate-rise">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-ink">
              Tu email ya estaba confirmado
            </h1>
            <p className="mt-3 text-base text-muted">
              Este enlace de confirmación ya fue utilizado anteriormente.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Ir al inicio
            </a>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-2xl border border-line bg-card p-8 text-center animate-rise">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
              <svg
                className="h-8 w-8 text-error"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-ink">
              Error al confirmar el email
            </h1>
            <p className="mt-3 text-base text-muted">{errorMessage}</p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Ir al inicio
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
