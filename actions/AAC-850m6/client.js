function(properties, context) {
	const openIn = properties.current_window ? "_self" : "_blank";
	const w = properties.width ? `width=${properties.width },` : '';
    const h = properties.h ? `height=${properties.height}` : properties.width ? `height=${properties.width}` : '';//set same as width if height is not defined
    let top = properties.top ? `top=${properties.top},` : '';
    let left = properties.left ? `left=${properties.left},` : '';
    const url = properties.url ? properties.url : '';
    if(properties.center){
        top = `top=${(window.outerHeight - properties.height) / 2}`;
        left = `left=${(window.outerWidth - properties.width) / 2}`;
    }

    window.openWindowPlugin = window.open(url, openIn, `${top} ${left} ${w} ${h}`);  
    if(properties.html_code){
      window.openWindowPlugin.document.write(properties.html_code);
    }


}