import { business } from "../../landing/data/business.js";
import LegalPageLayout, { LegalSection } from "./LegalPageLayout.jsx";

function PrivacyPolicy() {
  return (
    <LegalPageLayout
      description="Explicamos qué información recibimos cuando realizás una consulta, para qué la utilizamos y cómo podés ejercer tus derechos."
      title="Política de Privacidad"
    >
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos personales es{" "}
          <strong>{business.legalName}</strong>, con domicilio en{" "}
          <strong>{business.address}</strong> y correo electrónico de contacto{" "}
          <strong>{business.legalEmail}</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que podemos recibir">
        <p>
          Cuando completás el formulario de consulta podemos recibir tu nombre,
          la marca, modelo y año del vehículo, el servicio de interés y cualquier
          información que incluyas voluntariamente en el comentario.
        </p>
        <p>
          Al continuar la conversación mediante WhatsApp, también recibimos el
          número telefónico y la información de perfil que esa plataforma muestre
          de acuerdo con tu configuración.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidad del tratamiento">
        <p>Utilizamos la información exclusivamente para:</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-lime-dark">
          <li>Responder consultas y brindar información sobre los servicios.</li>
          <li>Preparar presupuestos orientativos o definitivos.</li>
          <li>Coordinar turnos y prestar los servicios solicitados.</li>
          <li>Atender consultas posteriores relacionadas con el trabajo.</li>
        </ul>
        <p>
          No utilizaremos estos datos para enviar publicidad sin una autorización
          específica ni los venderemos a terceros.
        </p>
      </LegalSection>

      <LegalSection title="4. Funcionamiento del formulario y terceros">
        <p>
          El formulario no guarda directamente la información en una base de
          datos propia del sitio. Al presionar el botón de envío se prepara un
          mensaje y se abre WhatsApp para que decidas si querés enviarlo.
        </p>
        <p>
          La comunicación queda sujeta a las políticas de WhatsApp y Meta. 
        </p>
      </LegalSection>

      <LegalSection title="5. Conservación y seguridad">
        <p>
          Conservaremos los datos solamente durante el tiempo necesario para
          responder la consulta, gestionar el servicio y cumplir obligaciones
          legales o comerciales aplicables. Adoptamos medidas razonables para
          evitar el acceso, uso o divulgación no autorizados.
        </p>
      </LegalSection>

      <LegalSection title="6. Derechos de las personas">
        <p>
          Podés solicitar gratuitamente el acceso, actualización, rectificación
          o supresión de tus datos, y retirar tu consentimiento cuando
          corresponda, escribiendo a <strong>{business.legalEmail}</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Enlaces externos">
        <p>
          La web contiene enlaces a WhatsApp, Instagram, Google Maps, Waze y
          otros sitios de terceros. Sus prácticas de privacidad son ajenas a El
          Tinglado Detailing y recomendamos consultar sus políticas antes de
          utilizarlos.
        </p>
      </LegalSection>

      <LegalSection title="8. Cambios en esta política">
        <p>
          Podemos actualizar esta Política de Privacidad para reflejar cambios
          legales o en el funcionamiento del sitio. La versión vigente estará
          siempre disponible en esta misma sección, indicando su fecha de
          actualización.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default PrivacyPolicy;
