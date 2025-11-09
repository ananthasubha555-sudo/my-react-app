 function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 text-sm mt-3">
      <div className="flex justify-center gap-x-80">
        <section>
          <h4 className="text-xl">Apple Store</h4>
          <p className="hover:underline"><a href="">Find a Store</a></p>
          <p className="hover:underline"><a href="">Today at Apple</a></p>
          <p className="hover:underline"><a href="">Apple Camp</a></p>
          <p className="hover:underline"><a href="">Ways to Buy</a></p>
          <p className="hover:underline"><a href="">Order status</a></p>
          <p className="hover:underline"><a href="">Shopping Help</a></p>
        </section>
        <section>
          <h4 className="text-xl">Apple Business</h4>
          <p className="hover:underline"><a href="">Apple and Business</a></p>
          <p className="hover:underline"><a href="">Shop for Business</a></p>
          <h4 className="text-xl mt-3">Apple values</h4>
          <p className="hover:underline"><a href="">Accessibility</a></p>
          <p className="hover:underline"><a href="">Education</a></p>
          <p className="hover:underline"><a href="">Environment</a></p>
          <p className="hover:underline"><a href="">Praivacy</a></p>
          <p className="hover:underline"><a href="">Supply Chain Innovation</a></p>
        </section>
        <section>
          <h4 className="text-xl">About Apple</h4>
          <p className="hover:underline"><a href="">Newsroom</a></p>
          <p className="hover:underline"><a href="">Apple Leadership</a></p>
          <p className="hover:underline"><a href="">Career Opportunities</a></p>
          <p className="hover:underline"><a href="">Investors</a></p>
          <p className="hover:underline"><a href="">Ethics & Compliance</a></p>
          <p className="hover:underline"><a href="">Contact Apples</a></p>
        </section>
      </div>
      <div className="flex justify-between p-5">
      <p className="mt-5">© 2025 Apple Inc. All rights reserved.</p>
      <p className="mt-5">Privacy Policy | Terms of Use | Sales Policy</p></div>
    </footer>
  );
}
export default Footer;
