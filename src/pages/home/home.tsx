import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
    IonList,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import iPartyHorn from "@icons/party-horn.svg";

export default function Home() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>
                        Good Job! <IonIcon icon={iPartyHorn} />
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent forceOverscroll={false}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large" color="primary">
                            Good Job! <IonIcon icon={iPartyHorn} />
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* Content */}
                <div className="ion-padding space-y-4">
                    <IonText color="primary" className="text-xl">
                        Welcome to React Ionic App!
                    </IonText>
                    <div>
                        <p>This is a simple boilerplate for a Ionic app with React.</p>
                        <p>Use this project to create your new projects</p>
                    </div>
                    <div>
                        <IonText color="secondary" className="text-lg">
                            What is included?
                        </IonText>
                        <IonList>
                            <IonItemGroup>
                                <IonItemDivider>
                                    <IonLabel>Core</IonLabel>
                                </IonItemDivider>
                                <IonItem href="https://reactrouter.com/en/main" target="_blank" detail>
                                    <IonLabel>
                                        <h2>React Router Dom</h2>
                                        <p>
                                            Routes setup with <i>IonReactRouter</i>
                                        </p>
                                        <IonText color="tertiary" className="text-xs">
                                            [src/App.tsx]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                                <IonItem href="https://redux-toolkit.js.org/" target="_blank" detail>
                                    <IonLabel>
                                        <h2>Redux (Redux Toolkit with RTX Query)</h2>
                                        <p>
                                            State management with preconfigured authentication reducer and RTX Query for
                                            data fetching
                                        </p>
                                        <IonText color="tertiary" className="text-xs">
                                            [src/store/index.ts]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                                <IonItem href="https://www.i18next.com/" target="_blank" detail lines="none">
                                    <IonLabel>
                                        <h2>i18next</h2>
                                        <p>For translations</p>
                                        <IonText color="tertiary" className="text-xs">
                                            [src/i18n.ts]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                            </IonItemGroup>
                            <IonItemGroup>
                                <IonItemDivider>
                                    <IonLabel>Components</IonLabel>
                                </IonItemDivider>
                                <IonItem
                                    href="https://ej2.syncfusion.com/react/documentation/introduction"
                                    target="_blank"
                                    detail
                                >
                                    <IonLabel>
                                        <h2>Syncfusion</h2>
                                        <p>Syncfusion React components as grids, scheduler, forms, etc.</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem href="https://ionicframework.com/docs/components" target="_blank" detail>
                                    <IonLabel>
                                        <h2>Ionic 7</h2>
                                        <p>The Ionic 7 components</p>
                                    </IonLabel>
                                </IonItem>
                            </IonItemGroup>
                            <IonItemGroup>
                                <IonItemDivider>
                                    <IonLabel>Style</IonLabel>
                                </IonItemDivider>
                                <IonItem href="https://tailwindcss.com/docs/guides/vite" target="_blank" detail>
                                    <IonLabel>
                                        <h2>TailwindCSS</h2>
                                        <p>A utility-first CSS framework</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem href="https://fontawesome.com/v6/icons" target="_blank" detail>
                                    <IonLabel>
                                        <h2>FontAwesome (Pro)</h2>
                                        <p>For icons</p>
                                    </IonLabel>
                                </IonItem>
                            </IonItemGroup>
                            <IonItemGroup>
                                <IonItemDivider>
                                    <IonLabel>Dev utils</IonLabel>
                                </IonItemDivider>
                                <IonItem>
                                    <IonLabel>
                                        <h2>ESLint</h2>
                                        <p>With React and TypeScript configurations</p>
                                        <IonText color="tertiary" className="text-xs">
                                            [.eslintrc.cjs]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h2>Prettier</h2>
                                        <p>For beautifully code</p>
                                        <IonText color="tertiary" className="text-xs">
                                            [.prettierrc.json]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h2>Husky</h2>
                                        <p>For pre-commit and pre-push hooks with code formatting and tests</p>
                                        <IonText color="tertiary" className="text-xs">
                                            [.husky]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h2>Lint staged</h2>
                                        <p>
                                            For <i>lint</i> your code before commits
                                        </p>
                                        <IonText color="tertiary" className="text-xs">
                                            [package.json]
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                            </IonItemGroup>
                        </IonList>
                    </div>
                    <IonButton routerLink="/about" fill="clear" expand="full">
                        About
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}
