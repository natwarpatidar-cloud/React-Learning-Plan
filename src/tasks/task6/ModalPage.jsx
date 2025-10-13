import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Modal from "./Modal";

export const ModalPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setIsOpen(false);
    };

    return (
        <div className="p-6">
            <Button size="lg" onClick={() => setIsOpen(true)}>
                Click me
            </Button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Modal.Header>Sign up form</Modal.Header>

                <Modal.Body>
                    <form id="signup-form" onSubmit={handleSubmit} className="space-y-4">
                        <Input name="username" type="text" placeholder="User Name" required />
                        <Input name="password" type="password" placeholder="Password" required />
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" form="signup-form">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};