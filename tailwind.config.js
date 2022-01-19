module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#FFF',
                secundary: '#353B48',
                red: '#FB0000',
                lightRed: '#E83838',
                gray: '#545454',
                lightGray: '#ADADAD',
                darkGray: '#333',
                lowContrast: '#E3E3E3' ,
                background: '#d6d4d4',
                backgroundSecundary: '#608b9b',
                dgreen: '#1d5847',
                lgreen: '#83c081'
            },
            
            backgroundImage: theme => ({
                'hero': "url('/hero.jpg')",  
                'hero2': "url('/hero2.jpg')"                     
               })
        },
        grayscale: {
            100: '100%',
        },
        grayscale: ['hover']
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}