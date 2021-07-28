import { motion } from 'framer-motion';

const circleStyle = {
	display: 'block',
	width: '3rem',
	height: '3rem',
	border: '0.5rem solid #e9e9e9',
	borderTop: '0.5rem solid #3498db',
	borderRadius: '50%',
};

const spinTransition = {
	loop: Infinity,
	ease: 'linear',
	duration: 1,
};

function CircleLoader() {
	return (
		<div className="loader">
			<motion.span
				style={circleStyle}
				animate={{ rotate: 360 }}
				transition={spinTransition}
			/>
			<h2>Loading...</h2>
		</div>
	);
}

export default function Loading() {
	return <CircleLoader />;
}
