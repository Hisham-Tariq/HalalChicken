type LoadingCircleProps = {
    size: number;
    sides: 1 | 2;
    color?: string;
}

const DEFAULT_LOADING_SIZE = 12;
const DEFAULT_LOADING_SIDES = 1;
const DEFAULT_LOADING_COLOR = 'gray-900';

/**
 * A component that displays a spinning circle to indicate loading.
 * @param size The size of the component. Default value is 12.
 * @param sides The number of sides of the border. Default value is 1.
 * @param color The color of the spinner. Default value is gray-900.
 */
const LoadingCircle = ({ size = DEFAULT_LOADING_SIZE, sides = DEFAULT_LOADING_SIDES, color = DEFAULT_LOADING_COLOR }: Partial<LoadingCircleProps>) => {
    return (
        <div className={`flex justify-center items-center h-${size} w-${size}`}>
            <div className={`animate-spin rounded-full border-t-2 ${sides === 2 ? 'border-b-2' : ''} border-${color} h-${size} w-${size}`}></div>
        </div>
    )
}