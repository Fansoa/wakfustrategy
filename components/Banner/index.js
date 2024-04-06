'use client';

import PropTypes from 'prop-types';
import Breadcrumb from "@/core/components/BreadCrumb";
import Image from "next/image";
import { Label, LabelContainer, BannerContainer, BreadcrumbContainer } from "./styled";

const Banner = ({label, pathsList, imgSrc}) => {
  return (
    <BannerContainer>
      <LabelContainer>
        { imgSrc && <Image src={imgSrc} alt={`${label}-illustration`} width={100} height={100}/>}
        <Label>{label}</Label>
      </LabelContainer>
      <BreadcrumbContainer>
        <Breadcrumb pathsList={pathsList}/>
      </BreadcrumbContainer>
  </BannerContainer>)
}

Banner.propTypes = {
  label: PropTypes.string,
  pathsList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  })),
  imgSrc: PropTypes.string,
}

export default Banner;
