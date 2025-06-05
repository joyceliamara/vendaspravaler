"use client";

export function FooterCTADouble() {
  return (
    <footer className="w-full pb-6 bg-dark-deeper">
      <div className="container px-4 md:px-6">
        <div className="border-t border-muted/20 pt-8 text-center">
          <div className="flex justify-center items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} Vendas Pra Valer. Todos os
                direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
