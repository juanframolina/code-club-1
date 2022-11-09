export default {
	fetch(request) {
		if(request.method== "GET") {
			return new Response('Hello worker', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		},
		else {
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
	},
};