import AOS from 'aos';
import 'aos/dist/aos.css';

const ExtraPart2 = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mb-10 font-bold">Our Dream Jobs</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
     <div data-aos="zoom-in-right" className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full" src="https://i.ibb.co/9tfpV9N/Web-Devlopment.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title py-5">Web Devlopment</h2>
   
  </div>
</div>
     <div data-aos="zoom-in-right" className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full" src="https://i.ibb.co/s59rxzp/Digital-Marketing.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title py-5">Digital Marketing</h2>
    
    
  </div>
</div>
     <div data-aos="zoom-in-right" className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full" src="https://i.ibb.co/xsSV7hR/Graphics-Design.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title py-5">Graphics Design</h2>
   
  </div>
</div>
     </div>
    </div>
  );
};
AOS.init();
export default ExtraPart2;
