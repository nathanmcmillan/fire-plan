class Network
{
    static Request(method, url, data, callback) {
        const content_header = 'Content-Type'
        const type_text = 'text/plain'
        const ok = 200

        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader(content_header, type_text)
        xhr.responseType = type_text
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === ok) {
                callback(xhr.responseText)
            }
        }
        xhr.send(data)
    }
}