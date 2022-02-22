import React from 'react';
import { Container } from 'react-bootstrap';
import { GoHeart } from 'react-icons/go';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import './Footer.scss';
import { config } from '../../config';


export default function Footer() {
    return (
        <footer id="footer">

            <Container className='pt-4'>

                <h1 className="title is-size-4-touch">{config.footer.optionalText}</h1>

                <ul className='list-unstyled list-inline text-center'>
                    <li className='list-inline-item'>
                        <a href={config.footer.linkedin} className='btn-floating btn-li mx-1' target="_blank">
                            <FaLinkedinIn className='icon' />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href={config.footer.github} className='btn-floating btn-git mx-1' target="_blank">
                            <FaGithub className='icon' />
                        </a>
                    </li>

                    <li className='list-inline-item'>
                        <a href={config.footer.facebook} className='btn-floating btn-fb mx-1' target="_blank">
                            <FaFacebookF className='icon' />
                        </a>
                    </li>
                </ul>


            </Container>
            <div className='footer-bg-faded py-3'>
                <span>
                    Made with
                    <GoHeart className='pulse' />
                    by <a href={config.footer.optionalLink}>{config.footer.name}</a>
                </span>
            </div>
        </footer>


    );
}
