import { useNavigate, useParams } from "react-router-dom";

type useRouteType = {
	onNavigate: (url: string) => () => void;
	id: string | undefined;
};

export const useRoute = (): useRouteType => {
	const navigate = useNavigate();
	const { id } = useParams();
	const onNavigate = (url: string) => () => {
		navigate(url);
	};
	return { onNavigate, id };
};
