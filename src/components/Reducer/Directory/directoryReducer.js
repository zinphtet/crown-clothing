const INTIAL_STATE = {
	sections: [
		{
			id: 1,
			title: 'hats',
			imgUrl:
				'https://images.pexels.com/photos/185765/pexels-photo-185765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			linkUrl: 'shop/hats',
		},
		{
			id: 2,
			title: 'jackets',
			imgUrl:
				'https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			linkUrl: 'shop/jackets',
		},
		{
			id: 3,
			title: 'sneakers',
			imgUrl:
				'https://images.pexels.com/photos/6776564/pexels-photo-6776564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			linkUrl: 'shop/sneakers',
		},
		{
			id: 4,
			title: 'womens',
			imgUrl:
				'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			size: 'large',
			linkUrl: 'shop/womens',
		},
		{
			id: 5,
			title: 'mens',
			imgUrl:
				'https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			size: 'large',
			linkUrl: 'shop/mens',
		},
	],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
