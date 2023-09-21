import { FC, useState } from "react";
import { useRoute } from "../hooks";
import * as SC from "../components";
// import { homeSvg, togeterSvg, userSvg } from '../asset'

export const Home: FC = () => {
	const { onNavigete } = useRoute();
	const [mount, setMount] = useState<number>(1);
	const onChangeMount = (mount: number) => () => {
		setMount(mount);
	};
	return (
		<SC.PagesLayout>
			<SC.CustomH1 children='HOME' />
			<button onClick={onChangeMount(1)} children='설악산' />
			<button onClick={onChangeMount(2)} children='오대산' />
			<button onClick={onChangeMount(3)} children='치악산' />
			<button onClick={onChangeMount(4)} children='태백산' />
			<button onClick={onNavigete(String(mount))}>실시간 채팅</button>
			<div style={{ position: "fixed", bottom: 0, maxWidth: "700px", width: "100%" }}>
				{/* <SC.NavBottom $jc='space-around'>
          {[homeSvg, togeterSvg, userSvg].map(list =>
            <SC.NavIcon key={list} children={<img src={list} alt='NavbottomImg'/>} />)}
        </SC.NavBottom> */}
				<SC.Footer />
			</div>
		</SC.PagesLayout>
	);
};
