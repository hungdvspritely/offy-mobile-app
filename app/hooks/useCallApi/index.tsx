import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

function useCallApi() {
	const dispatch = useDispatch();
	const state = useSelector((state: RootState) => state);
	const fetchTasks = () => {
		dispatch({
            
		});
	};

	return {
		state,
		fetchTasks
	};
}

export default useCallApi;
