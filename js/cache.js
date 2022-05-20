const CacheObj = {}; 

const Cache = () => {
	const setInCache =  (searchTerm, data) => {
		CacheObj[searchTerm] = data;
	}
	const results = () => {
		return CacheObj;
	}

	const contains = (searchTerm) => {
		return CacheObj[searchTerm] || undefined;
	}

	return {
		setInCache,
		results,
		contains,
	}
}


export default Cache;