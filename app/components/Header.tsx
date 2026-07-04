'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isCurrent = (path: string) => {
    if (path === '/' && pathname === '/') return 'current';
    if (path !== '/' && pathname.startsWith(path)) return 'current';
    return '';
  };

  const isTechActive = () => {
    const techRoutes = [
      '/3d-projection-mapping',
      '/virtual-reality',
      '/augmented-reality',
      '/lidar-scanning',
      '/motion-capture',
      '/interactive-mapping',
      '/3d-stereo-film',
      '/holographic-projection',
      '/touch-kiosk'
    ];
    return techRoutes.some(route => pathname.startsWith(route)) ? 'current' : '';
  };

  return (
    <header id="header" className="full-header">
      <div id="header-wrap">
        <div className="container clearfix">
          <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

          {/* Logo */}
          <div id="logo">
            <a href="/" className="standard-logo" data-dark-logo="/images/logo-dark.png">
              <img src="/images/logo.png" alt="WildChild Studios Logo" />
            </a>
            <a href="/" className="retina-logo" data-dark-logo="/images/logo-dark@2x.png">
              <img src="/images/logo@2x.png" alt="WildChild Studios Logo" />
            </a>
          </div>

          {/* Primary Navigation */}
          <nav id="primary-menu">
            <ul>
              <li className={isCurrent('/')}><a href="/"><div>Home</div></a></li>
              <li className={isCurrent('/about')}><a href="/about"><div>About</div></a></li>
              <li className={isTechActive()}>
                <a href="#"><div>Technologies</div></a>
                <ul>
                  <li className={isCurrent('/3d-projection-mapping')}><a href="/3d-projection-mapping"><div>3D Projection Mapping</div></a></li>
                  <li className={isCurrent('/virtual-reality')}><a href="/virtual-reality"><div>Virtual Reality</div></a></li>
                  <li className={isCurrent('/augmented-reality')}><a href="/augmented-reality"><div>Augmented Reality</div></a></li>
                  <li className={isCurrent('/lidar-scanning')}><a href="/lidar-scanning"><div>LIDAR Scanning</div></a></li>
                  <li className={isCurrent('/motion-capture')}><a href="/motion-capture"><div>Motion Capture</div></a></li>
                  <li className={isCurrent('/interactive-mapping')}><a href="/interactive-mapping"><div>Interactive Projection Mapping</div></a></li>
                  <li className={isCurrent('/3d-stereo-film')}><a href="/3d-stereo-film"><div>3D STEREOSCOPIC FILM</div></a></li>
                  <li className={isCurrent('/holographic-projection')}><a href="/holographic-projection"><div>HOLOGRAPHIC PROJECTION</div></a></li>
                  <li className={isCurrent('/touch-kiosk')}><a href="/touch-kiosk"><div>TOUCH KIOSK</div></a></li>
                </ul>
              </li>
              <li className={isCurrent('/services')}><a href="/services"><div>Services</div></a></li>
              <li className={isCurrent('/jobs')}><a href="/jobs"><div>Career</div></a></li>
              <li className={isCurrent('/contact')}><a href="/contact"><div>Contact Us</div></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
