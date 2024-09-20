
console.count('essau')


/* import type React from "react";
import {
	type PropsWithChildren,
	PropsWithRef,
	forwardRef,
	useEffect,
	useState,
} from "react";
import ReactDOM from "react-dom/client";

type AppType = PropsWithChildren<{
	name?: React.Dispatch<React.SetStateAction<"">>;
}>;

const App = forwardRef<HTMLParagraphElement, AppType>(({}, refx) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(count);
	}, [count]);

	const click = () => {
		setCount((oldCount) => {
			return (oldCount += 1);
		});
	};

	return (
		<p onClick={click} ref={refx}>
			{count}
		</p>
	);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<App>
		<p>ok</p>
	</App>,
);
 */
