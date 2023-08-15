const elements = [
	{
		name:'archlinux',
		url:'https://archlinux.org',
		description:'An awesome operating system!!!',
		tags:['kiss','floss','linux','operating system']
	},
	{
		name:'blender',
		url:'https://www.freecad.org/',
		description:'3d parametric modeling software',
		tags:['floss','3d','3d modeling']
	},
];

function getAllUniqueTags() {
    const allTags = [];
    elements.forEach(element => {
        allTags.push(...element.tags);
    });
    return [...new Set(allTags)];
}
