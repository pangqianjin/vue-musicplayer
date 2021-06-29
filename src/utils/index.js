export const uploadFiles = async ()=>{
    const songs = []
    const musicsFilter = ['mp3', 'flac', 'aac', 'ape']

    const dirHandle = await window.showDirectoryPicker()

    for await (const entry of dirHandle.values()) {
        const extensionName = entry.name.split('.')[1]
        if(entry.kind==='file' && musicsFilter.includes(extensionName)){
            let url = ''
            const file = await entry.getFile()
            if (window.createObjectURL!=undefined) { // basic
                url = window.createObjectURL(file) ;
            }else if (window.webkitURL!=undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file) ;
            }else if (window.URL!=undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file) ;
            }
            songs.push({name: entry.name, audio: new Audio(url)})
        }
    }
    return songs
}