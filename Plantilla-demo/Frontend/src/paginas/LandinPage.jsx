import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import logoDarkMode from '../assets/dark.png'
import comida from "../assets/comida.png"
import vet from "../assets/vet.avif"
import oso from "../assets/oso.png"
import vet1 from "../assets/vet1.jpg"
import vet2 from "../assets/vet2.jpg"
import vet3 from "../assets/vet3.jpg"
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    const mainStyle = {
        backgroundImage: `url('/public/images/landing_fondo.jpg')`, // Reemplaza con la ruta de tu imagen de fondo
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <main style={mainStyle} className='bg-[#ffe4e1] px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
                <section>
                    <nav className='p-10 mb-12 flex justify-between'>
                        <ul className='flex items-center'>
                            <li><img onClick={() => setdarkMode(!darkMode)} className='cursor-pointer' src={logoDarkMode} alt="logo" width={40} height={40} />
                            </li>

                        </ul>
                        <ul className='flex items-center'>

                            <li><Link to="/login" className='bg-[#F2ECBE] text-grey-400 px-6 py-2 rounded-full ml-8 hover:bg-gray-900 hover:text-white' href="#">Iniciar sesión</Link>
                            </li>
                        </ul>
                    </nav>



                    <div className='text-center'>
                        <h2 className='text-5xl py-2 text-[#C08261] font-medium md:text-6xl'>FOOD MANAGMENT</h2>

                        <h3 className='text-2xl py-2 md:text-3xl text-[#C08261]'>SUBTITULO 2</h3>
                    </div>

                    <div className='text-5xl flex justify-center gap-96 py-3'>
                        <img src={comida} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'} />

                        <img src={comida} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'} />

                        <img src={comida} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'} />
                    </div>


                </section>

                <section>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-4 text-[#C08261]'>Servicios</h1>
                    </div>

                    <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        <div className='flex justify-center items-center'> {/* Agregamos flex y justify-center para centrar horizontalmente */}
                            <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-[#E2C799]'>
                                <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                                    <img className='w-full h-full object-cover' src={vet1} alt="" />
                                </div>
                                <h3 className='text-lg font-medium pt-8 pb-2'>VACUNACIONES</h3>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'> {/* Agregamos flex y justify-center para centrar horizontalmente */}
                            <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-[#E2C799]'>
                                <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                                    <img className='w-full h-full object-cover' src={vet2} alt="" />
                                </div>
                                <h3 className='text-lg font-medium pt-8 pb-2'>CIRUGÍA</h3>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'> {/* Agregamos flex y justify-center para centrar horizontalmente */}
                            <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-[#E2C799]'>
                                <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                                    <img className='w-full h-full object-cover' src={oso} alt="" />
                                </div>
                                <h3 className='text-lg font-medium pt-8 pb-2'>DESPARASITACIONES</h3>
                            </div>
                        </div>
                    </Carousel>
                </section>


            </main>
            <footer className='bg-[#F2ECBE] text-grey py-8'>
                <div className='container mx-auto text-center'>
                    <div className='grid grid-cols-3 gap-8'>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Contáctos</h3>
                            <ul className='text-sm'>
                                <li>+593 0000 565</li>
                                <li><a href='mailto:demomail@gmail.com'>ejemplo@gmail.com</a></li>
                                <li>Quito - Ecuador</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Servicios</h3>
                            <ul className='text-sm'>
                                <li>crud CLIENTES</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>TITULO PAGINA</h3>
                            <p>LINEA DE NEGOCIO DE LA PAGINA</p>
                        </div>
                    </div>
                    <p className='mt-8'>
                        ©{new Date().getFullYear()} Todos los derechos reservados |
                        <i className='ti-heart' aria-hidden='true'></i> created by ALITO
                    </p>
                </div>
            </footer>

        </div>
    )
}