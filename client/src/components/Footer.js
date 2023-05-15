import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillMail,
    AiFillTwitterSquare,
} from 'react-icons/ai';
import { BsFillTelephoneFill, BsTelegram } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-pink py-5 flex flex-col gap-4 ">
            <div className="w-full text-white container mx-auto flex flex-col md:flex-row gap-4 items-center justify-evenly">
                <div>
                    <Link to="/" className="">
                        <div className="flex gap-2 items-end">
                            <img
                                className="w-8 h-8 lg:w-10 lg:h-10"
                                src="./p_logo.png"
                                alt="logo"
                            />
                            <p className="font-bold text-xl lg:text-2xl">
                                PATONTAS
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="text-lg font-bold uppercase flex flex-col gap-2 items-center">
                    <p>Social Media</p>
                    <div className="flex gap-2">
                        <Link
                            to={
                                'https://www.instagram.com/patontas.accesorios/'
                            }
                            target="_blank"
                            className="group">
                            <AiFillInstagram
                                size={30}
                                className="group-hover:hidden"
                            />
                            <p className="hidden group-hover:inline-flex opacity-40 px-1 text-white bg-gray-700 rounded-lg relative top-0 left-0">
                                Instagram
                            </p>
                        </Link>
                        <Link to={'/'} className="group">
                            <AiFillTwitterSquare
                                size={30}
                                className="group-hover:hidden"
                            />
                            <p className="hidden group-hover:inline-flex opacity-40 px-1 text-white bg-gray-700 rounded-lg relative top-0 left-0">
                                twitter
                            </p>
                        </Link>
                        <Link to={'/'} className="group">
                            <AiFillFacebook
                                size={30}
                                className="group-hover:hidden"
                            />
                            <p className="hidden group-hover:inline-flex opacity-40 px-1 text-white bg-gray-700 rounded-lg relative top-0 left-0">
                                facebook
                            </p>
                        </Link>
                        <Link
                            to={
                                'https://api.whatsapp.com/message/6SDPDVJHVXX7F1?autoload=1&app_absent=0'
                            }
                            target="_blank"
                            className="group">
                            <FaWhatsappSquare
                                size={30}
                                className="group-hover:hidden"
                            />
                            <p className="hidden group-hover:inline-flex opacity-40 px-1 text-white bg-gray-700 rounded-lg relative top-0 left-0">
                                whatsApp
                            </p>
                        </Link>
                        <Link to={'/'} className="group">
                            <BsTelegram
                                size={30}
                                className="group-hover:hidden"
                            />
                            <p className="hidden group-hover:inline-flex opacity-40 px-1 text-white bg-gray-700 rounded-lg relative top-0 left-0">
                                Telegram
                            </p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsFillTelephoneFill size={20} />
                        <p>(+xx) xxxxxxxx</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiFillMail size={20} />
                        <p>email@email.com</p>
                    </div>
                </div>
            </div>
            <p className="text-white text-center">
                Copyright © 2023 Patontas. Powered by Patontas.
            </p>
        </div>
    );
};

export default Footer;
