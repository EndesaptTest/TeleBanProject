import { gql } from '../__generated__';

export const GET_USER=gql(`
query User {
    user {
        id
        userName
        name
    }
}
`)
export const GET_MESSAGES=gql(`
query Messages($id:Int!) {
    messages(conversationId: $id) {
        id
        conversationId
        messageText
        createdAt
        sender{
            userName
        }
    }
}
`)
export const GET_CONVERSATIONS=gql(`
    query Conversations{
        conversations {
            id
            title
            messages{
                messageText
                senderId
            }
            conversationGuid
            creatorId
        }    
    }
`)
export const GET_CONVERSATION_INFO=gql(`
    query ConversationInfo($conversationGuid:UUID!) {
        conversationInfo(conversationGuid: $conversationGuid) {
            id
            title
        }       
    }
`)