
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Desde que instalé la plataforma, mi tienda se ha vuelto un punto de referencia en el barrio. La facilidad con la que se hace todo me ha ayudado a no perder esos clientes que antes me pedían corresponsalía.",
    author: "Felipe Camacho",
    role: "Distribuidor Bemovil",
    rating: 5,
    avatar: "woman-professional-headshot"
  },
  {
    quote: "Hemos probado varias plataformas, pero ninguna se compara con esta. La plataforma de BeMovil es el balance perfecto entre simplicidad y seguridad. Ahora, no solo no perdemos clientes, sino que nos llegan más por el servicio.",
    author: "Leonor Lucumí",
    role: "Punto de Venta Bemovil",
    rating: 5,
    avatar: "asian-man-professional"
  },
  {
    quote: "Las comisiones son mucho más altas que las de otros servicios. La inversión valió la pena. Ahora tenemos total visibilidad de nuestras ganancias y controlamos todo desde el celular.",
    author: "Oscar Fernandez",
    role: "Distribuidor Bemovil",
    rating: 5,
    avatar: "latina-woman-business"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
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
            La Confianza de Miles de <span className="gradient-text">Negocios Como El Tuyo</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            La experiencia de nuestros clientes habla por sí misma.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card rounded-xl p-6 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg mb-6 flex-grow italic text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img  className="h-12 w-12 rounded-full object-cover" alt={`${testimonial.author} avatar`} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default TestimonialsSection;
