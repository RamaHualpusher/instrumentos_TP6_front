import React from 'react';

const DondeEstamos = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h1 className="display-4">Estamos aquí</h1>
          <p className="lead">
            Encuéntranos en Av. Las Heras y Av. San Martin, Ciudad de Mendoza.
          </p>
          <div className="ratio ratio-1x1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d209.40288004493593!2d-68.83824675011921!3d-32.886372276116525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1681522991151!5m2!1ses-419!2sar" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <a href="/productos" className="btn btn-primary btn-lg mt-3 w-100">Ver nuestros productos</a>
        </div>
      </div>
    </div>
  );
}

export default DondeEstamos;
