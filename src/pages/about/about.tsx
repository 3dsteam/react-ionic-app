import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";

export default function About() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen forceOverscroll={false}>
                <div className="ion-padding h-full flex flex-col justify-center items-center">
                    <small>Powered by</small>
                    <IonText color="primary" className="font-bold">3DS Team</IonText>
                </div>
            </IonContent>
        </IonPage>
    );
}
