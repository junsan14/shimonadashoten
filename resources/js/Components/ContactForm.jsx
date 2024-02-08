import {useForm, router} from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import { MdOutlineMailOutline,MdOutlineMarkEmailRead } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { BsSend, BsSendCheck} from "react-icons/bs";


import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect, useState } from 'react';

export default function ContactForm() {

  const { data, setData,processing,progress,post,reset } = useForm({
    user_name: "",
    user_email: "",   
    subject:"",
    content:"",
}) 
   const [isMail, setIsMail] = useState(false);

    function handleChange(e){
        const key = e.target.id;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [key]: value,
        }))

    }
    function submit(e){
        //console.log(progress)
      e.preventDefault();
        post(route('contact.send',data), 
        
        {
        preserveScroll: true,
        onBefore: () => {
            const res = confirm('メールを送ります。');
            if(!res){

            }
            return res;
        },
        onStart:()=>{
            //console.log(processing)
                
        },
        onSuccess:()=>{
            data.user_name="";
            data.user_email="";
            data.subject="";
            data.content="";
            setIsMail(true);
        },
      })
    }
  const MailIcon = ()=>{
    if(processing){
        return <VscLoading className='show move' />;

    }else{
        if(isMail){
            return <BsSendCheck className="show"/> ;
        }else{
            return <BsSend className="show"/> ;
        }

    }
  }


  return (
    <>
        <form onSubmit={submit} className="form_control" id="form">
            <div className="form_control_item">
                <label htmlFor="email">名前</label>
                <TextInput
                        id="user_name"
                        type="text"
                        name="email"
                        className="form_control_item_input"
                        autoComplete="username"
                        value={data.user_name}
                        onChange={handleChange}
                        required
                    />
            </div>
            <div className="form_control_item">
                <label htmlFor="email">アドレス</label>
                <TextInput
                        id="user_email"
                        type="email"
                        name="email"
                        className="form_control_item_input"
                        autoComplete="username"
                        value={data.user_email}
                        onChange={handleChange}
                        required
                    />
            </div>

            <div className="form_control_item">
                <label htmlFor="subject">件名</label>
                <TextInput
                        id="subject"
                        type="text"
                        name="email"
                        className="form_control_item_input"
                        autoComplete="subject"

                        value={data.subject}
                        onChange={handleChange}
                        required
                    />
            </div>
            
            <div className="form_control_item">
                <label htmlFor="content">内容</label>
                <textarea id="content" className="form_control_item_input" rows="10" name="content"
                        required
                        onChange={handleChange}
                        value={data.content}
                ></textarea>
            </div>
            <div className='section_content_icon'>
                <button disabled={processing} className="form_control_item_submit">
                    <MailIcon />                    
                </button>
            </div>

        </form>
  </>
  );
}


