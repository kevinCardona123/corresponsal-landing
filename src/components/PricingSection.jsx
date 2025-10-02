import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Megaphone, Zap, ShieldCheck } from "lucide-react";

// El componente ya no necesita estado ya que no hay ciclo de facturación
const OpportunitySection = ({ ctaLink = "#registro" }) => {

  const opportunityLevels = [
    {
      name: "Vinculación Gratuita",
      description: "¡Empieza a ganar hoy! El riesgo es CERO.",
      priceHook: "Totalmente GRATIS", // Nuevo campo para el precio/ganancia
      hookBenefit: "Asegura la Máxima Comisión",
      features: [
        "Plataforma completa (Recargas, pines, etc.)",
        "Soporte técnico 24/7",
        "Activación de bancos básicos",
        "Capacitación On-Demand",
      ],
      notIncluded: [
        "Publicidad Física Personalizada",
        "Crédito para Iniciar Operación",
      ],
      cta: "Regístrate Ahora",
      popular: false,
    },
    {
      name: "El Aliado Estrella",
      description: "Tu negocio se convierte en centro de servicios financieros.",
      priceHook: "Comisión MÁS ALTA",
      hookBenefit: "Libera TODOS los Bancos",
      features: [
        "Todo lo incluido en Vinculación Gratuita",
        "Activación de Davivienda y Nequi",
        "Generación de historial para crédito inicial",
        "Integraciones especiales para grandes operaciones",
      ],
      notIncluded: [
        "Publicidad Física Personalizada",
        "Asesor dedicado para créditos",
      ],
      cta: "Quiero la Máxima Comisión",
      popular: true,
    },
    {
      name: "Oferta Exclusiva (Cupos Limitados)",
      description: "Solo para los más rápidos: Beneficios extra por tiempo limitado.",
      priceHook: "Publicidad FÍSICA GRATIS",
      hookBenefit: "El primero en registrarse gana",
      features: [
        "Todos los beneficios del Aliado Estrella",
        "Diseño e impresión de publicidad física",
        "Asesoría directa para solicitud de crédito (si aplica)",
        "Prioridad en nuevas integraciones bancarias",
      ],
      notIncluded: [],
      cta: "Verificar Disponibilidad",
      popular: false,
    },
  ];

  return (
    <section id="oportunidad" className="py-20 md:py-28 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Nuevo Título y Subtítulo */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            ¡La **Vinculación** es Totalmente <span className="text-indigo-600">GRATIS</span>!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 font-semibold max-w-2xl mx-auto"
          >
            Regístrese hoy y **asegure el porcentaje más alto de comisión**. Libere los bancos que su negocio necesita ahora.
          </motion.p>
        </div>

        {/* Rejilla de Oportunidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunityLevels.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-8 flex flex-col h-full relative border-4 transition-all duration-300
                ${plan.popular ? "border-indigo-500 bg-white shadow-2xl" : "border-gray-200 bg-white shadow-lg"}
              `}
            >
              {plan.popular && (
                <Badge
                  variant="default"
                  className="absolute -top-3 right-6 py-1 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
                >
                  Más Rápido Gana
                </Badge>
              )}
              
              {/* Título y Descripción */}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
              
              {/* Hook de Precio/Valor */}
              <div className="mb-6 border-b pb-4">
                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-purple-600' : 'text-indigo-600'}`}>
                  {plan.priceHook}
                </span>
                <p className="text-lg font-semibold text-red-500 mt-1">{plan.hookBenefit}</p>
              </div>

              {/* Lo que está incluido */}
              <div className="mb-8 flex-grow">
                <h4 className="font-bold mb-3 text-base uppercase tracking-wider text-gray-600">
                  Beneficios:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Lo que NO está incluido (Oportunidades de Up-sell/Cross-sell) */}
                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-bold mb-3 mt-6 text-sm uppercase tracking-wider text-gray-400">
                      Exclusiones Temporales:
                    </h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start opacity-70">
                          <X className="h-5 w-5 text-red-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Botón CTA */}
              <Button
                asChild
                className={`w-full text-lg font-bold py-6 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0"
                    : "bg-indigo-400 hover:bg-indigo-500" // Botón secundario en un tono más suave
                }`}
                variant="default"
              >
                <a href={ctaLink}>{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
