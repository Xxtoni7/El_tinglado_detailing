import { business } from "../../landing/data/business.js";
import LegalPageLayout, { LegalSection } from "./LegalPageLayout.jsx";

function TermsAndConditions() {
  return (
    <LegalPageLayout
      description="Estas condiciones regulan el uso de la web, las solicitudes de presupuesto y la información publicada sobre nuestros servicios."
      title="Términos y Condiciones"
    >
      <LegalSection title="1. Identificación legal del taller">
        <dl className="grid gap-3 rounded-2xl bg-warm p-6 sm:grid-cols-[12rem_1fr]">
          <dt className="font-semibold text-navy">Nombre comercial</dt>
          <dd>{business.tradeName}</dd>
          <dt className="font-semibold text-navy">Titular o razón social</dt>
          <dd>{business.legalName}</dd>
          <dt className="font-semibold text-navy">Domicilio comercial</dt>
          <dd>{business.address}</dd>
          <dt className="font-semibold text-navy">Correo electrónico</dt>
          <dd>{business.legalEmail}</dd>
          <dt className="font-semibold text-navy">Teléfono</dt>
          <dd>{business.phoneDisplay}</dd>
        </dl>
      </LegalSection>

      <LegalSection title="2. Aceptación de los Términos">
        <p>
          Al acceder y utilizar los servicios de {business.tradeName}, usted
          acepta estar sujeto a estos términos y condiciones. Si no está de
          acuerdo con alguna parte de estos términos, no debe utilizar nuestros
          servicios.
        </p>
        <p>
          Al completar el formulario y presionar el botón “Enviar consulta”,
          usted declara haber leído y aceptado estos Términos y Condiciones y la
          Política de Privacidad vigente.
        </p>
      </LegalSection>

      <LegalSection title="3. Alcance de la web">
        <p>
          Esta web tiene carácter informativo y permite solicitar asesoramiento
          o un presupuesto por los servicios ofrecidos por {business.tradeName}.
          El envío de un formulario o mensaje no confirma automáticamente un
          turno ni constituye por sí solo la contratación de un servicio.
        </p>
      </LegalSection>

      <LegalSection title="4. Servicios y presupuestos">
        <p>
          Las descripciones e imágenes permiten conocer de manera general los
          servicios. El alcance, precio, duración y resultado posible de cada
          trabajo dependerán del vehículo, su estado y la evaluación realizada
          por el taller.
        </p>
        <p>
          Los presupuestos y su vigencia se informarán antes de confirmar el
          trabajo. Cualquier tarea adicional será comunicada para su aprobación.
        </p>
      </LegalSection>

      <LegalSection title="5. Turnos, reprogramaciones y cancelaciones">
        <p>
          Un turno se considera confirmado cuando el taller lo comunica de forma
          expresa. Las condiciones aplicables a señas, reprogramaciones,
          cancelaciones o ausencias serán informadas antes de confirmar la
          reserva y deberán ser aceptadas por el cliente.
        </p>
      </LegalSection>

      <LegalSection title="6. Estado del vehículo y objetos personales">
        <p>
          El taller podrá registrar el estado exterior e interior del vehículo
          antes de comenzar el servicio para dejar constancia de daños o marcas
          preexistentes. El cliente deberá retirar objetos personales de valor e
          informar cualquier condición especial relevante para la realización
          segura del trabajo.
        </p>
      </LegalSection>

      <LegalSection title="7. Garantías y derechos del consumidor">
        <p>
          Las garantías específicas se comunicarán según el servicio y los
          productos utilizados. Ninguna disposición de estos términos limita los
          derechos reconocidos por la Ley 24.240 de Defensa del Consumidor y las
          demás normas argentinas aplicables.
        </p>
      </LegalSection>

      <LegalSection title="8. Propiedad intelectual y derechos de autor">
        <p>
          © {new Date().getFullYear()} {business.tradeName}. Salvo que se indique
          expresamente lo contrario, las fotografías, videos, textos, diseño,
          identidad visual, logotipo y demás contenido original publicado en
          esta web son propiedad de {business.tradeName} o se utilizan con la
          autorización correspondiente.
        </p>
        <p>
          No está permitida su reproducción, modificación, distribución,
          publicación ni utilización comercial, total o parcial, sin autorización
          previa y por escrito del taller. Las marcas, logotipos y contenidos de
          terceros pertenecen a sus respectivos titulares.
        </p>
      </LegalSection>

      <LegalSection title="9. Fotografías de vehículos">
        <p>
          El taller puede publicar fotografías o videos de trabajos realizados
          cuando cuente con autorización o una base legítima para hacerlo. Se
          procura evitar la exposición innecesaria de patentes, personas u otros
          datos identificables. La publicación de una imagen no autoriza a
          terceros a copiarla o reutilizarla.
        </p>
      </LegalSection>

      <LegalSection title="10. Privacidad">
        <p>
          El tratamiento de los datos enviados mediante el formulario o WhatsApp
          se encuentra explicado en nuestra{" "}
          <a
            className="font-semibold text-navy underline decoration-lime decoration-2 underline-offset-4 transition hover:text-lime-dark"
            href="#politica-de-privacidad"
          >
            Política de Privacidad
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="11. Enlaces de terceros">
        <p>
          Los enlaces a WhatsApp, Instagram, Google Maps, Waze u otros servicios
          externos se ofrecen para facilitar la comunicación y ubicación. El
          taller no controla la disponibilidad, contenido ni políticas de esas
          plataformas.
        </p>
      </LegalSection>

      <LegalSection title="12. Legislación aplicable y modificaciones">
        <p>
          Estos términos se rigen por las leyes de la República Argentina, sin
          perjuicio de la jurisdicción y los derechos que correspondan a cada
          consumidor. El taller podrá actualizar estas condiciones cuando resulte
          necesario y publicará aquí la versión vigente.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default TermsAndConditions;
