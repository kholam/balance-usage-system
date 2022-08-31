import tw, { styled, css, theme } from 'twin.macro';

/* only interested in two variants and sizes for implementation purpose */
type Variant = | 'primary' | 'light';

type Size = | 'sm' | 'lg';

interface ButtonProps {
    variant?: Variant // optional
    size?: Size; // optional
    isDisabled?: boolean; // optional
}

/*
* contains all variant types and sizes
* Default button size is sm
* Default variant type is primary
* */
const Button = styled.button(({ size = 'sm', variant = 'primary', isDisabled } : ButtonProps) => [
    /* default styling for all buttons */
    tw`px-6 py-2.5 rounded shadow-md
       inline-block font-medium leading-tight
       hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 
        active:shadow-lg transition duration-150 ease-in-out text-white
       `,

    // button primary
    variant === 'primary' && tw`bg-indigo-500 text-white hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-800`,

    // button light
    variant === 'light' && tw`bg-gray-200 focus:bg-gray-300 active:bg-gray-400 text-gray-700 hover:bg-gray-300`,

    size === 'sm' && tw`text-sm`,

    size === 'lg' && tw`text-lg`,

    isDisabled && tw`cursor-not-allowed opacity-60`
])

export default Button