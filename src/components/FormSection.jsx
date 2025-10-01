import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-white"> 
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje de Cierre y Beneficios Finales */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <Badge
              variant="default"
              className="mb-6 py-1 px-4 text-xs font-medium uppercase tracking-wide bg-purple-600 hover:bg-purple-700 text-white"
            >
              Cierre su Registro
            </Badge>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900"
            >
              ¡Recupere el control de su negocio con BeMovil!
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Su tiempo es oro. Deje de perder clientes que buscan corresponsalía bancaria. Regístrese ahora y acceda a:
            </motion.p>

            {/* Lista de Beneficios Reforzados */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center lg:justify-start space-y-4 mb-10 text-left lg:pl-0"
            >
              <div className="flex items-start w-full max-w-xs">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-base text-gray-700 font-semibold">Máxima Comisión garantizada.</span>
              </div>
              <div className="flex items-start w-full max-w-xs">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-base text-gray-700 font-semibold">Activación prioritaria de bancos.</span>
              </div>
              <div className="flex items-start w-full max-w-xs">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-base text-gray-700 font-semibold">Soporte y capacitación a su medida.</span>
              </div>
            </motion.div>
            
            {/* CTA Final que puede llevar al formulario si no está a la vista */}
            <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 w-full sm:w-auto mt-4"
                // Aquí puedes agregar un onClick que haga scroll hacia el formulario si este está en la misma sección
            >
                Vincularme ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          {/* Columna Derecha: Formulario Embebido (El foco de la sección) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-gray-50 p-6 rounded-2xl shadow-xl border border-gray-200"
          >
            {/* Titulo del Formulario */}
            <h3 className="text-center text-xl font-bold mb-4 text-gray-800">
                Llene el formulario y comience a ganar hoy mismo:
            </h3>

            {/* Contenedor para el iframe con estilo de tarjeta */}
            <div className="bg-white rounded-xl overflow-hidden">
              <iframe 
                // REEMPLAZA ESTE SRC CON TU IFRAME FINAL DE BREVO
                className="w-full h-[700px] rounded-xl" 
                src="https://5253161e.sibforms.com/serve/MUIFAJowyucdE88RnvKACSSuVSfms7_B1TZVqjAedQGDOsMDiUhE9PJJ0vx52mEdgEx59hQA-8-HPMsIHktzNMpweW_8ueDz0PzJOfvaBI15s4FrOMMeGrinplpeuSjj-alde3ElhhW00Qhty02ud-LbWUQJIN197ByLLaTHRlHmWzVl47Grs5AryLC7iTJWZ53CqtByjsmxuTdE" 
                frameBorder="0" 
                scrolling="no" // Cambiado a 'no' para evitar barras de desplazamiento dobles
                allowFullScreen
                style={{display: 'block'}}
              >
              </iframe>
            </div>
            
            {/* Mensaje de confianza debajo del formulario */}
            <p className="text-center text-sm text-gray-500 mt-4">
                *Vinculación 100% segura y gratuita.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;