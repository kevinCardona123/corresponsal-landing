
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const faqs = [
  {
    question: "Qué corresponsales bancarios maneja BeMovil?",
    answer: "Manejamos corresponsalía de los bancos Grupo Aval (Bogotá, Occidente, AV Villas, Popular), Banco Caja Social, Banco Agrario, Banco Colpatria, y plataformas como Davivienda/Daviplata y Nequi."
  },
  {
    question: "Tiene algún costo vincularme a la plataforma?",
    answer: "No, la vinculación a la plataforma es completamente gratuita."
  },
  {
    question: "BeMovil me da un monto de dinero para empezar?",
    answer: "BeMovil ofrece un beneficio de crédito para clientes antiguos con un historial crediticio excelente."
  },
  {
    question: "Qué documentos necesito para vincularme?",
    answer: "Requieres tu RUT (actualizado), cédula, fotos del interior y exterior de tu negocio, y Cámara de Comercio (si aplica)."
  },
  {
    question: "Todos los corresponsales se activan al vincularme?",
    answer: "No. Para activar algunos bancos, como Daviplata/Nequi, necesitas completar un proceso con documentación adicional. Al hacerlo, obtienes premios que se convierten en saldo."
  },
  {
    question: "Cómo hago depósitos y retiros a Bancolombia o Nequi?",
    answer: "Para las operaciones con Bancolombia, puedes usar transfiya y seleccionar el banco al que deseas enviar o retirar."
  },
  {
    question: "Al cuánto tiempo de vincularme se activa la corresponsalía?",
    answer: "La activación de la corresponsalía se realiza en un plazo muy corto después de que completes tu proceso de registro y validación."
  },
  {
    question: "Cuánto me cobran por enviar a Nequi?",
    answer: "No se cobra ninguna tarifa por enviar a Nequi."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/50 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Preguntas <span className="gradient-text">Frecuentes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Encuentra las respuestas a las preguntas mas comunes de Correponsalia Bancaria con Bemovil.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Aun tienes Dudas?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Contacta a un agente
            <ChevronDown className="ml-1 h-4 w-4 rotate-270" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
