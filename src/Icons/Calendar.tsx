
import { memo } from 'react';

const Calendar = ({ color }: CalendarProps) => (
	<svg
		className='mr-2 w-4 h-4 inline align-text-bottom'
		fill="none"
		stroke={color}
		strokeWidth={2}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
		strokeLinecap="round"
		strokeLinejoin="round"
	</svg>

);

export default memo(Calendar);

interface CalendarProps {
	color: string;
}