import React, { FC } from 'react';
import hexToRgbA from 'helpers/hexToRgbA';

const RatingStar: FC<TRatingStar> = ({ className, onClick, id, color = hexToRgbA('#898C93', 0.2) }) => {
    return (
        <svg id={id} onClick={onClick} className={className} width="41" height="41" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.7198 15.4192C41.7198 14.8007 41.2519 14.4163 40.3154 14.2657L27.7297 12.4358L22.0886 1.02781C21.7712 0.342487 21.3614 0 20.86 0C20.3588 0 19.9492 0.342487 19.6315 1.02781L13.9902 12.4358L1.40385 14.2657C0.468066 14.4163 0 14.8007 0 15.4192C0 15.7704 0.209005 16.1715 0.626927 16.6228L9.75324 25.4983L7.59707 38.0342C7.56361 38.2683 7.54701 38.4359 7.54701 38.5358C7.54701 38.8868 7.63465 39.1833 7.81011 39.4259C7.98548 39.6688 8.24858 39.7896 8.59976 39.7896C8.9008 39.7896 9.23495 39.6898 9.60264 39.489L20.8597 33.5714L32.1174 39.4884C32.4687 39.6892 32.8029 39.7896 33.1199 39.7896C33.8059 39.7896 34.1486 39.3725 34.1486 38.5364C34.1486 38.3194 34.1402 38.1523 34.1234 38.0344L31.9674 25.499L41.0682 16.6234C41.5028 16.1882 41.7198 15.7869 41.7198 15.4192Z" fill={color} />
        </svg>
    )
}

export type TRatingStar = {
    id?: string;
    className?: string;
    onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    color?: string;
}

export default RatingStar;