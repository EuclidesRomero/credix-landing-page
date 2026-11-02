import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carton } from "../components/ui/Carton";
import { useDebtShare } from "../hooks/useDebtShare";
import { ensureCredixTornPaperFilter } from "../vendor/tornpaper";

export function CartonPage() {
  const { shareId } = useParams<{ shareId: string }>();
  const navigate = useNavigate();
  const { data, cartonProps, isLoading, error, refetch } = useDebtShare(shareId);
  const [showModal, setShowModal] = useState(!shareId);
  const [inputValue, setInputValue] = useState("");

  ensureCredixTornPaperFilter();

  useEffect(() => {
    if (shareId) {
      setShowModal(false);
    }
  }, [shareId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = inputValue.trim();
    if (id) {
      const shareIdMatch = id.match(/([a-f0-9-]{36})/i);
      const finalId = shareIdMatch ? shareIdMatch[1] : id;
      navigate(`/carton/${finalId}`);
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center px-3 sm:px-5 py-6">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-ink">
              Ingresar ID del Cartón
            </h2>
            <p className="mb-4 text-sm text-muted">
              Pega el link completo o el ID del cartón para ver los detalles.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="xyz789abc"
                className="w-full rounded-lg border border-line px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Ver Cartón
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isLoading ? (
        <p className="text-center text-sm text-stone-600">Cargando…</p>
      ) : error ? (
        <div className="flex max-w-sm flex-col items-center gap-3 px-4 text-center">
          <p className="text-sm text-red-900/85">{error}</p>
          <button
            type="button"
            onClick={refetch}
            className="rounded-sm border border-stone-800/35 bg-white/80 px-3 py-1.5 text-xs font-medium text-stone-900 hover:bg-stone-100"
          >
            Reintentar
          </button>
        </div>
      ) : data ? (
        <Carton
          {...cartonProps}
          className="h-full min-h-0 w-full max-w-[360px] flex-1"
        />
      ) : null}
    </div>
  );
}
