import React from 'react';
import Button from 'react-bootstrap/Button';
import { StaticImage } from "gatsby-plugin-image"
import resume from '../images/Resume_RushilSingh.pdf'
import SocialFollow from './socialfollow';

const Left = () => (
  <div class="col-sm-4">
    <div class="sticky-top">

      <div class="text-center">
        <StaticImage
          src='../images/rushilsingh.jpeg'
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Rushil Singh"
          style={{ marginBottom: `1.45rem` }}
        />
        <Button variant="secondary" size="lg"
          href={resume}
          download="Resume - Rushil Singh">Download Resume
        </Button>
        <SocialFollow />
      </div></div></div>
);
export default Left;
