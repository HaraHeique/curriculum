import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <section className="content">
        {/* Renderiza as rotas filhas dinâmicamente */}
        <Outlet /> 
      </section>
    </main>
  );
};

export default MainLayout;