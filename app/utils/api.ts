export class Api{
    
    async generate(prompt: string){
        const response = await fetch('/api/generate',{
            body: JSON.stringify({prompt}),
            method: "POST"
        })

        const result = await response.json()
        return result
    }
}