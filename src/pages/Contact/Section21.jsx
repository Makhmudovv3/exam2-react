import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Section21.css';

const Section21 = () => {
    const [formData, setFormData] = useState({});

    const botToken = "8481072431:AAHUQjU2ZNd2b9MiuV1olxhRtAJha5lrGi4";
    const chatId = "6205699347";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = `
📬 Yangi xabar:~
👤 Ism: ${formData.name || "Kiritilmagan"}
📧 Email: ${formData.email || "Kiritilmagan"}
🏢 Kompaniya: ${formData.company || "Kiritilmagan"}
📌 Mavzu: ${formData.subject || "Kiritilmagan"}
💬 Xabar: ${formData.message || "Kiritilmagan"}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: text })
            });

            if (response.ok) {
                toast.success("🚀 Muvaffaqiyatli yuborildi!", {
                    position: "top-right",
                    autoClose: 3000,
                });
                e.target.reset();
                setFormData({});
            } else {
                toast.error("❌ Xabar ketmadi, qaytadan urinib ko'ring");
            }
        } catch (error) {
            toast.error("🌐 Tarmoqda xatolik yuz berdi");
        }
    };

    return (
        <div className="form-section">
            <ToastContainer />

            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Full Name*</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Email*</label>
                        <input
                            type="email"
                            placeholder="example@yourmail.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Company*</label>
                        <input
                            type="text"
                            placeholder="Your company name"
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject*</label>
                        <input
                            type="text"
                            placeholder="How can we help"
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Message*</label>
                    <textarea
                        placeholder="Hello there..."
                        rows="8"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                    ></textarea>
                </div>

                <button type="submit" className="form-btn">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Section21;