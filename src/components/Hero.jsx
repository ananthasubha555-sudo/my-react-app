 function Hero() {
  return (
    <header 
    style={{backgroundImage:"url('https://apple-website-two-zeta.vercel.app/assets/iphone-Bu-ZD6GN.jpg')"}} className="text-center p-20 pt-10 max-h-full bg-cover">
      <div className=" mt-1">
      <h1 className=" text-white text-5xl font-semibold mb-4">iPhone 16 Pro</h1>
      <p className=" text-white text-lg mb-6">Titanium. So strong. So light. So Pro.</p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Learn more</button>
        <button className="text-blue-600 bg-black px-3 py-2 rounded-full outline outline-blue-600 hover:bg-blue-600 hover:text-white">Buy</button>
      </div>
      </div>
    </header>
  );
}
export default Hero;
