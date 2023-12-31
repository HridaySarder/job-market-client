

const Banner = () => {
  return (
   
    <div className="carousel w-full my-16">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/8bm9tXv/job-Search.jpg" className="w-full lg:h-[700px] rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/DfLmyvK/job-job.jpg" className="w-full h-[700px] rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/QJ0W27K/jon-search-employment-recuritment-resume.jpg" className="w-full h-[700px] rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/z6BqM7M/apply-online-application-form-recruitment-concept.jpg" className="w-full h-[700px] rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Banner;