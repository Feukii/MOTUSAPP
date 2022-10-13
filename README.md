# MOTUSAPP
sequenceDiagram

    CLIENT->>+MOTUS:

    MOTUS->>+AUTH:

    AUTH ->>+CLIENT: login

    MOTUS->>+CLIENT: Index.html

    CLIENT->>+MOTUS: quel est le mot du jour?

    MOTUS->>+CLIENT: Mot du jour

    CLIENT->>+CLIENT: Essais, score

    CLIENT->>+SCORE: score

    SCORE->>+CLIENT: score
