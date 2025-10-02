import React from "react";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
} from "lucide-react";
import logo from "../img/logo_be.png"; // Asegúrate que la ruta a tu logo sea correcta

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Contenedor principal para centrar todo el contenido */}
        <div className="flex flex-col items-center gap-8">
          
          {/* --- Bloque Superior: Logo, Descripción e Iconos --- */}
          <div className="flex flex-col items-center text-center gap-4">
            <a href="#">
              <img
                src={logo}
                alt="Logo Bepay"
                className="h-12 w-auto mb-2" // Añadido un margen inferior
              />
            </a>
            <p className="text-muted-foreground max-w-md">
              Bemovil: La única plataforma que necesita para que su tienda gane más, sin fallas.
            </p>
            <div className="flex space-x-6 mt-2"> {/* Aumentado el espacio entre iconos */}
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* --- Bloque Inferior: Copyright y Políticas --- */}
          <div className="w-full border-t border-gray-700/50 pt-8 mt-8 flex flex-col gap-4 md:flex-row md:justify-between items-center">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} KevAcademy. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Términos del Servicio
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;