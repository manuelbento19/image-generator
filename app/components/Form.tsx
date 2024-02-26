"use client"
import React, { FormEvent, useState } from 'react'
import ImagePreview from './ImagePreview';
import { Api } from '../utils/api';

export default function Form() {
    const [imageContent,setImageContent] = useState("");
    const [visibleModal,setVisibleModal] = useState(false);
    const [loading,setLoading] = useState(false);
    const api = new Api();

    const getImage = async(event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const promptInput = event.currentTarget[0] as HTMLTextAreaElement
        if(!promptInput.value)
        return promptInput.focus();


        setLoading(false)
        const result = await api.generate(promptInput.value)
        if(!result.error){
            setImageContent(result.url)
            setVisibleModal(true)
        }
        setLoading(false)
    }
    return (
    <>
        <form onSubmit={getImage} className="flex flex-col gap-3 mt-2">
            <div className="flex flex-col gap-1">
                <label htmlFor="prompt" className="text-sm font-medium">Prompt</label>
                <textarea name="prompt" placeholder="Escreva um texto descritivo da imagem que gostarias de gerar" className="text-sm text-zinc-600 border border-gray-400 rounded-md max-h-40 h-28 outline-none p-2" id="prompt"></textarea>
            </div>
            <button type="submit" disabled={loading} className="disabled:bg-gray-400 disabled:hover:brightness-100 py-3 px-2 bg-zinc-900 text-white text-sm border-0 rounded-md transition hover:brightness-150">Generate</button>
        </form>
        {imageContent && visibleModal && <ImagePreview src={imageContent} close={setVisibleModal}/>}
    </>
  )
}
