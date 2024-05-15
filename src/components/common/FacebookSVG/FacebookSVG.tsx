const FacebookSVG = ({
  fill,
  width,
  height
}: {
  fill?: string
  width?: number
  height?: number
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 10}
    height={height ?? 10}
    fill="currentColor"
  >
    <g clipPath="url(#a)">
      <path
        fill={fill ?? '#E9197F'}
        d="M10.714 5c0-2.761-2.398-5-5.357-5S0 2.239 0 5c0 2.496 1.959 4.564 4.52 4.94V6.444H3.16V5h1.36V3.898c0-1.253.8-1.945 2.024-1.945.586 0 1.199.098 1.199.098v1.23h-.676c-.665 0-.873.386-.873.781V5H7.68l-.238 1.445H6.194V9.94c2.561-.375 4.52-2.443 4.52-4.939Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h10.714v10H0z" width={width} height={height} />
      </clipPath>
    </defs>
  </svg>
)
export default FacebookSVG
