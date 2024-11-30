// // components/Footer.js

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-yellow-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Contact Info Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
//             <p className="mb-2">Email: <a href="mailto:contact@peros.com" className="underline">contact@peros.com</a></p>
//             <p className="mb-2">Phone: <a href="tel:+919876543210" className="underline">+91-9876543210</a></p>
//             <p>Address: Mumbai, Maharashtra, India</p>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
//             <ul className="space-y-2">
//               <li><Link href="/" className="hover:underline">Home</Link></li>
//               <li><Link href="/about" className="hover:underline">About Us</Link></li>
//               <li><Link href="/products" className="hover:underline">Products</Link></li>
//               <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
//               <li><Link href="/contact" className="hover:underline">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Social Media Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
//             <div className="flex space-x-6">
//               <a href="https://facebook.com/peros" target="_blank" rel="noopener noreferrer" className="text-2xl">
//                 <i className="fab fa-facebook hover:text-blue-500"></i>
//               </a>
//               <a href="https://twitter.com/peros" target="_blank" rel="noopener noreferrer" className="text-2xl">
//                 <i className="fab fa-twitter hover:text-blue-400"></i>
//               </a>
//               <a href="https://instagram.com/peros" target="_blank" rel="noopener noreferrer" className="text-2xl">
//                 <i className="fab fa-instagram hover:text-pink-400"></i>
//               </a>
//               <a href="https://linkedin.com/company/peros" target="_blank" rel="noopener noreferrer" className="text-2xl">
//                 <i className="fab fa-linkedin hover:text-blue-600"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Legal & Newsletter Section */}
//         <div className="mt-8 border-t border-white pt-4">
//           <div className="flex justify-between items-center">
//             <div className="text-sm">
//               <p>&copy; {new Date().getFullYear()} Peros. All rights reserved.</p>
//             </div>
//             <div className="text-sm">
//               <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>{" "}
//               |{" "}
//               <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
